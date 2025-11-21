
export function normalizeLocation(input: string): { type: 'coords' | 'zip' | 'name', value: string } {
     
    const trimmed = input.trim()

     // 1: Zip Code Format
     if (/^\d{5}$/.test(trimmed)) {
        return { type: 'zip', value: trimmed };
     }

     // 2a. Extract all numbers -> coordinates
     const numMatches = [...trimmed.matchAll(/[+-]?[0-9.]+/g)];
     const nums = numMatches.map(m => parseFloat(m[0]));


     // 2b. Extract N/S/E/W direction letters
     const dirMatches = [...trimmed.matchAll(/[NSEW]/gi)];
     const dirs = dirMatches.map(d => d[0].toUpperCase());

     if (nums.length >= 2) {
      let lat: number | null = null;
      let lon: number | null = null;

      const [a, b] = nums;

      const hasNS = dirs.some((d) => d === "N" || d === "S");
      const hasEW = dirs.some((d) => d === "E" || d === "W");

      // --- Case 1: Coordinates contain N/S and E/W → map properly
      if (hasNS && hasEW) {
          const latIndex = dirs.findIndex((d) => d === "N" || d === "S");
          const lonIndex = dirs.findIndex((d) => d === "E" || d === "W");

          lat = nums[latIndex];
          lon = nums[lonIndex];

          // Apply sign
          if (dirs[latIndex] === "S") lat = -Math.abs(lat);
          if (dirs[latIndex] === "N") lat = Math.abs(lat);

          if (dirs[lonIndex] === "W") lon = -Math.abs(lon);
          if (dirs[lonIndex] === "E") lon = Math.abs(lon);
      }

      // --- Case 2: No direction letters → interpret as lat,lon
      else {
          lat = a;
          lon = b;
      }

      // Validate
      if (lat == null || lon == null) {
          return { type: "name", value: trimmed };
      }
      if (Math.abs(lat) > 90) return { type: "name", value: trimmed };
      if (Math.abs(lon) > 180) return { type: "name", value: trimmed };

      // Round
      lat = Number(lat.toFixed(6));
      lon = Number(lon.toFixed(6));

      return {
          type: 'coords',
          value: `${lat},${lon}`,
      };
   }

     // 4. Otherwise, return the name
     return { type: 'name', value: trimmed }
}


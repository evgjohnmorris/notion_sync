/**
 * Generated Tool: searchTool_0326
 * Domain: Search
 * ID: 0326
 */
exports.searchTool_0326 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0326:', error);
    throw error;
  }
};

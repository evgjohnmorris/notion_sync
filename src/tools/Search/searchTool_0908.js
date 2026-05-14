/**
 * Generated Tool: searchTool_0908
 * Domain: Search
 * ID: 0908
 */
exports.searchTool_0908 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0908:', error);
    throw error;
  }
};

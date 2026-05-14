/**
 * Generated Tool: searchTool_0528
 * Domain: Search
 * ID: 0528
 */
exports.searchTool_0528 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0528:', error);
    throw error;
  }
};

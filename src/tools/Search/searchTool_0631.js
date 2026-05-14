/**
 * Generated Tool: searchTool_0631
 * Domain: Search
 * ID: 0631
 */
exports.searchTool_0631 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0631:', error);
    throw error;
  }
};

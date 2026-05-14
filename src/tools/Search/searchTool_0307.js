/**
 * Generated Tool: searchTool_0307
 * Domain: Search
 * ID: 0307
 */
exports.searchTool_0307 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0307:', error);
    throw error;
  }
};

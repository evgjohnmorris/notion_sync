/**
 * Generated Tool: searchTool_0419
 * Domain: Search
 * ID: 0419
 */
exports.searchTool_0419 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0419:', error);
    throw error;
  }
};

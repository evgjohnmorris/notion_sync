/**
 * Generated Tool: searchTool_0445
 * Domain: Search
 * ID: 0445
 */
exports.searchTool_0445 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0445:', error);
    throw error;
  }
};

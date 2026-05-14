/**
 * Generated Tool: searchTool_0412
 * Domain: Search
 * ID: 0412
 */
exports.searchTool_0412 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0412:', error);
    throw error;
  }
};

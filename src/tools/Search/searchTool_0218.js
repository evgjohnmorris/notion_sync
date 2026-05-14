/**
 * Generated Tool: searchTool_0218
 * Domain: Search
 * ID: 0218
 */
exports.searchTool_0218 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0218:', error);
    throw error;
  }
};

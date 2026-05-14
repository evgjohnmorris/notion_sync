/**
 * Generated Tool: searchTool_0365
 * Domain: Search
 * ID: 0365
 */
exports.searchTool_0365 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0365:', error);
    throw error;
  }
};

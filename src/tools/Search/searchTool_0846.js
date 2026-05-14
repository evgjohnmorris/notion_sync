/**
 * Generated Tool: searchTool_0846
 * Domain: Search
 * ID: 0846
 */
exports.searchTool_0846 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0846:', error);
    throw error;
  }
};

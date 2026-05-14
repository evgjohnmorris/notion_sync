/**
 * Generated Tool: searchTool_0021
 * Domain: Search
 * ID: 0021
 */
exports.searchTool_0021 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0021:', error);
    throw error;
  }
};

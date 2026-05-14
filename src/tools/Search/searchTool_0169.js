/**
 * Generated Tool: searchTool_0169
 * Domain: Search
 * ID: 0169
 */
exports.searchTool_0169 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0169:', error);
    throw error;
  }
};

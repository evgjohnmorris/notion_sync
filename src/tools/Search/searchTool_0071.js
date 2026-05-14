/**
 * Generated Tool: searchTool_0071
 * Domain: Search
 * ID: 0071
 */
exports.searchTool_0071 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0071:', error);
    throw error;
  }
};

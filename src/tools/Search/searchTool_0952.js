/**
 * Generated Tool: searchTool_0952
 * Domain: Search
 * ID: 0952
 */
exports.searchTool_0952 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0952:', error);
    throw error;
  }
};

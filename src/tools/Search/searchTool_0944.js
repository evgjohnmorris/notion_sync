/**
 * Generated Tool: searchTool_0944
 * Domain: Search
 * ID: 0944
 */
exports.searchTool_0944 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0944:', error);
    throw error;
  }
};

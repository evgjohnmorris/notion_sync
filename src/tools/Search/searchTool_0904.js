/**
 * Generated Tool: searchTool_0904
 * Domain: Search
 * ID: 0904
 */
exports.searchTool_0904 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0904:', error);
    throw error;
  }
};

/**
 * Generated Tool: searchTool_0420
 * Domain: Search
 * ID: 0420
 */
exports.searchTool_0420 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0420:', error);
    throw error;
  }
};

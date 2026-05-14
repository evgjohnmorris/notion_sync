/**
 * Generated Tool: searchTool_0654
 * Domain: Search
 * ID: 0654
 */
exports.searchTool_0654 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0654:', error);
    throw error;
  }
};

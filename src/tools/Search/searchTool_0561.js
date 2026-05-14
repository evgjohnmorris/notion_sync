/**
 * Generated Tool: searchTool_0561
 * Domain: Search
 * ID: 0561
 */
exports.searchTool_0561 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0561:', error);
    throw error;
  }
};

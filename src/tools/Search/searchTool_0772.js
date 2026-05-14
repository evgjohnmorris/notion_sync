/**
 * Generated Tool: searchTool_0772
 * Domain: Search
 * ID: 0772
 */
exports.searchTool_0772 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0772:', error);
    throw error;
  }
};

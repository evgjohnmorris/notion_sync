/**
 * Generated Tool: searchTool_0960
 * Domain: Search
 * ID: 0960
 */
exports.searchTool_0960 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0960:', error);
    throw error;
  }
};

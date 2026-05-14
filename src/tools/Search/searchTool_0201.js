/**
 * Generated Tool: searchTool_0201
 * Domain: Search
 * ID: 0201
 */
exports.searchTool_0201 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0201:', error);
    throw error;
  }
};

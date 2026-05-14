/**
 * Generated Tool: searchTool_0859
 * Domain: Search
 * ID: 0859
 */
exports.searchTool_0859 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0859:', error);
    throw error;
  }
};

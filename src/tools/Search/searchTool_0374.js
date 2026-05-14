/**
 * Generated Tool: searchTool_0374
 * Domain: Search
 * ID: 0374
 */
exports.searchTool_0374 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0374:', error);
    throw error;
  }
};

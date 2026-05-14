/**
 * Generated Tool: searchTool_0724
 * Domain: Search
 * ID: 0724
 */
exports.searchTool_0724 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0724:', error);
    throw error;
  }
};

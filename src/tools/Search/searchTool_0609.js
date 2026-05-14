/**
 * Generated Tool: searchTool_0609
 * Domain: Search
 * ID: 0609
 */
exports.searchTool_0609 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0609:', error);
    throw error;
  }
};

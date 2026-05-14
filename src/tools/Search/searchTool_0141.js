/**
 * Generated Tool: searchTool_0141
 * Domain: Search
 * ID: 0141
 */
exports.searchTool_0141 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0141:', error);
    throw error;
  }
};

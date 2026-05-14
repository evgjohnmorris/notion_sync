/**
 * Generated Tool: searchTool_0833
 * Domain: Search
 * ID: 0833
 */
exports.searchTool_0833 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0833:', error);
    throw error;
  }
};

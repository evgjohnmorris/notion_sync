/**
 * Generated Tool: searchTool_0582
 * Domain: Search
 * ID: 0582
 */
exports.searchTool_0582 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0582:', error);
    throw error;
  }
};

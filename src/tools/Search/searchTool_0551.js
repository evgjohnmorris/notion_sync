/**
 * Generated Tool: searchTool_0551
 * Domain: Search
 * ID: 0551
 */
exports.searchTool_0551 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0551:', error);
    throw error;
  }
};

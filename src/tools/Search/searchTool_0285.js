/**
 * Generated Tool: searchTool_0285
 * Domain: Search
 * ID: 0285
 */
exports.searchTool_0285 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0285:', error);
    throw error;
  }
};

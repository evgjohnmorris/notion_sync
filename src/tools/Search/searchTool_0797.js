/**
 * Generated Tool: searchTool_0797
 * Domain: Search
 * ID: 0797
 */
exports.searchTool_0797 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0797:', error);
    throw error;
  }
};

/**
 * Generated Tool: searchTool_0363
 * Domain: Search
 * ID: 0363
 */
exports.searchTool_0363 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0363:', error);
    throw error;
  }
};

/**
 * Generated Tool: searchTool_0871
 * Domain: Search
 * ID: 0871
 */
exports.searchTool_0871 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0871:', error);
    throw error;
  }
};

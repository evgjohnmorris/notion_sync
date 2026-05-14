/**
 * Generated Tool: blocksTool_0152
 * Domain: Blocks
 * ID: 0152
 */
exports.blocksTool_0152 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0152:', error);
    throw error;
  }
};

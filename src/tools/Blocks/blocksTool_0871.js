/**
 * Generated Tool: blocksTool_0871
 * Domain: Blocks
 * ID: 0871
 */
exports.blocksTool_0871 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0871:', error);
    throw error;
  }
};

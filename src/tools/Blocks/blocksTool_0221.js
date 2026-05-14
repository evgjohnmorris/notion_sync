/**
 * Generated Tool: blocksTool_0221
 * Domain: Blocks
 * ID: 0221
 */
exports.blocksTool_0221 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0221:', error);
    throw error;
  }
};

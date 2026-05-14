/**
 * Generated Tool: blocksTool_0262
 * Domain: Blocks
 * ID: 0262
 */
exports.blocksTool_0262 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0262:', error);
    throw error;
  }
};

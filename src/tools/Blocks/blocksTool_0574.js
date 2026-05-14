/**
 * Generated Tool: blocksTool_0574
 * Domain: Blocks
 * ID: 0574
 */
exports.blocksTool_0574 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0574:', error);
    throw error;
  }
};

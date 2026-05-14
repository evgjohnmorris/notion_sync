/**
 * Generated Tool: blocksTool_0486
 * Domain: Blocks
 * ID: 0486
 */
exports.blocksTool_0486 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0486:', error);
    throw error;
  }
};

/**
 * Generated Tool: blocksTool_0591
 * Domain: Blocks
 * ID: 0591
 */
exports.blocksTool_0591 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0591:', error);
    throw error;
  }
};

/**
 * Generated Tool: blocksTool_0169
 * Domain: Blocks
 * ID: 0169
 */
exports.blocksTool_0169 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0169:', error);
    throw error;
  }
};

/**
 * Generated Tool: blocksTool_0329
 * Domain: Blocks
 * ID: 0329
 */
exports.blocksTool_0329 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0329:', error);
    throw error;
  }
};

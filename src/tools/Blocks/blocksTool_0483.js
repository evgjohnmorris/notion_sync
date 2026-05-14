/**
 * Generated Tool: blocksTool_0483
 * Domain: Blocks
 * ID: 0483
 */
exports.blocksTool_0483 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0483:', error);
    throw error;
  }
};

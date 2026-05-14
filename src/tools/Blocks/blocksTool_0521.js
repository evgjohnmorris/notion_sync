/**
 * Generated Tool: blocksTool_0521
 * Domain: Blocks
 * ID: 0521
 */
exports.blocksTool_0521 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0521:', error);
    throw error;
  }
};

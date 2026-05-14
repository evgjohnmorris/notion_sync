/**
 * Generated Tool: blocksTool_0556
 * Domain: Blocks
 * ID: 0556
 */
exports.blocksTool_0556 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0556:', error);
    throw error;
  }
};

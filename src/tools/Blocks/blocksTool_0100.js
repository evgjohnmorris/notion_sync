/**
 * Generated Tool: blocksTool_0100
 * Domain: Blocks
 * ID: 0100
 */
exports.blocksTool_0100 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0100:', error);
    throw error;
  }
};

/**
 * Generated Tool: blocksTool_0344
 * Domain: Blocks
 * ID: 0344
 */
exports.blocksTool_0344 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0344:', error);
    throw error;
  }
};

/**
 * Generated Tool: blocksTool_0499
 * Domain: Blocks
 * ID: 0499
 */
exports.blocksTool_0499 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0499:', error);
    throw error;
  }
};

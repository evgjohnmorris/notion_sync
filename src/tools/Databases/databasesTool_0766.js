/**
 * Generated Tool: databasesTool_0766
 * Domain: Databases
 * ID: 0766
 */
exports.databasesTool_0766 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0766:', error);
    throw error;
  }
};
